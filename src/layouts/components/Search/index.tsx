// library
import { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineSearch, AiOutlineLoading3Quarters, AiFillCloseCircle, AiOutlineMore } from 'react-icons/ai';
import classNames from 'classnames/bind';
// scss, constants,..
import styles from './Search.module.scss';
import { ISearchResult } from '~/models/searchResults';
import { useDebounce } from '~/hooks';
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
        setSearch((prev) => ({
            ...prev,
            loading: true,
        }));
        !!debounce
            ? fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
                  .then((res) => res.json())
                  .then((res) => {
                      setSearch((prev) => ({
                          ...prev,
                          result: res.data,
                          loading: false,
                      }));
                  })
                  .catch(() => {
                      setSearch((prev) => ({
                          ...prev,
                          loading: false,
                      }));
                  })
            : setSearch((prev) => ({
                  ...prev,
                  result: [],
              }));
    }, [debounce]);
    const [showResults, setShowResults] = useState(true);
    const handleHideResults = () => {
        setShowResults(false);
    };
    const handleShowResults = () => {
        setShowResults(true);
    };
    const inputRef = useRef<any>();

    return (
        <div className={cx('search-wrapper')}>
            <SearchResult results={search.result} show={showResults} handleHideResults={handleHideResults}>
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
                        onFocus={handleShowResults}
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
