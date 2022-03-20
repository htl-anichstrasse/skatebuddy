import './SearchBar.css'

const SearchBar = ( {searchQuery, setSearchQuery} ) => {

    return(
        <>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search parks</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value.toLowerCase())}
            type="text"
            id="header-search"
            placeholder="Suche nach einen Park"
            name="s" 
            className='searchbar'
        />
        </>
    )
}

export default SearchBar;