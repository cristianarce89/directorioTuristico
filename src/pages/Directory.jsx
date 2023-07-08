import { SloganServices } from "../components/atoms/SloganServices/SloganServices"
import { SloganTravel } from "../components/atoms/SloganTravel/SloganTravel"
import { SearchBar } from "../components/molecules/SearchBar/SearchBar"
import { HeaderOne } from "../components/organims/HeaderOne/HeaderOne"

export const Directory = () => {
    return (
        <>
            <HeaderOne />
            <SloganTravel />
            <SearchBar />
            <SloganServices />
        </>
    )
}