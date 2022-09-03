// library
import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch, AiOutlineLoading3Quarters, AiFillCloseCircle, AiOutlineMore } from 'react-icons/ai';
import classNames from 'classnames/bind';
// scss, constants,..
import styles from './Search.module.scss';
import { ISearchResult } from '~/models/searchResults';
import { useDebounce } from '~/hooks';
import { searchSevices } from '~/apiServices';
// components
import { SearchResult } from '~/components/Popper';

const cx = classNames.bind(styles);

interface Isearch {
    input: string;
    loading: boolean;
    result: ISearchResult[];
}
function Search() {
    const [search, setSearch] = useState<Isearch>({
        input: '',
        loading: false,
        result: [],
    });

    const setSearchInput = (value: string) => {
        setSearch((prev) => ({
            ...prev,
            input: value,
        }));
    };
    const debounce = useDebounce(search.input, 400);
    useEffect(() => {
        if (!debounce.trim()) {
            setSearch((prev) => ({
                ...prev,
                result: [],
            }));
            return;
        }
        const fetchApi = async () => {
            setSearch((prev) => ({
                ...prev,
                loading: true,
            }));
            const result = await searchSevices(debounce);
            setSearch((prev) => ({
                ...prev,
                result: result,
                loading: false,
            }));
        };
        fetchApi();
    }, [debounce]);
    const [showResults, setShowResults] = useState(true);

    const inputRef = useRef<any>();

    return (
        <div className={cx('search-wrapper')}>
            <SearchResult
                results={search.result}
                show={showResults}
                handleHideResults={() => {
                    setShowResults(false);
                }}
            >
                <form className={cx('search-form')}>
                    <input
                        type="text"
                        className={cx('search-input')}
                        placeholder="Tìm kiếm tài khoản và video"
                        value={search.input}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }}
                        ref={inputRef}
                        onFocus={() => {
                            setShowResults(true);
                        }}
                    />
                    {search.input && (
                        <div className={cx('search-input-icon')}>
                            {search.loading ? (
                                <AiOutlineLoading3Quarters className={cx('search-loading-icon')} />
                            ) : (
                                <AiFillCloseCircle
                                    onClick={() => {
                                        setSearchInput('');
                                        inputRef.current.focus();
                                    }}
                                />
                            )}
                        </div>
                    )}
                    <span className={cx('search-seperate')} />
                    <button className={cx('search-btn')} onClick={(e) => e.preventDefault()}>
                        <div className={cx('search-btn-icon')}>
                            <AiOutlineSearch />
                        </div>
                    </button>
                </form>
            </SearchResult>
        </div>
    );
}

export default Search;
