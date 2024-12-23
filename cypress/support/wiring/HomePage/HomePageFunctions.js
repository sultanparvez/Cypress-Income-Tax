import HomePageObjects from "../../pageObjects/HomePage/HomePageObjects"

const homePageobjects = new HomePageObjects
class HomePage{
    HomePage(){
    }

/**
 * Select Country Selection Field
 * @return HomePage
 * @memberof HomePage
 */
selectCountrySelectionField(){
    homePageobjects.getcountrySelectionField().click()
    return this
}
/**
 * Type Country Name
 * @return HomePage
 * @memberof HomePage
 */
typeCountryName(name){
    homePageobjects.getcountrySelectionField().type(name)
    return this
}

/**
 * Select Auto Suggested Country
 * @return HomePage
 * @memberof HomePage
 */
selectAutoSuggestedCountry(countryName){
   homePageobjects.getAutoSuggestedCountry(countryName).click()
}

/**
 * Assert Coutry Selected Succesfully
 * @return HomePage
 * @memberof HomePage
 */
assertCoutrySelectedSuccesfully(countryName){
    homePageobjects.getSelectedCountry().should('have.value', countryName);     
 }
 
}
export default HomePage;