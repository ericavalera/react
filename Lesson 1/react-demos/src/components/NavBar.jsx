import React from 'react';

function NavBar(){
    const handleSearch = (event) => {
        event.preventDefault();
        const query = event.target.query.value;
    };
    return (
    <form onSubmit={handleSearch}> 
        <input name="query" type="text" placeholder="search"/>
        <button type="submit">Search</button>
    </form>
    );
}
export default NavBar