import './SearchBar.css'

const SearchBar = ( {searchQuery, setSearchQuery} ) => {

    return(
        <>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value.toLowerCase())}
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
            className='searchbar'
        />
        </>
    )
}

export default SearchBar;