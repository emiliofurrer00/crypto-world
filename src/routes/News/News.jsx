import React, {useEffect} from 'react'

import { MainContainer, SearchSection, SearchBar } from './NewsElements'


function News() {
    return (
        <MainContainer>
            <SearchSection>
                <form>
                    <SearchBar>
                        <option value="bitcoin">Bitcoin</option>  
                    </SearchBar>  
                </form>
            </SearchSection>
        </MainContainer>
    )
}

export default News
