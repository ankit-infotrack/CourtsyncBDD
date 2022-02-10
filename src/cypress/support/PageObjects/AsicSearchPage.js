const ORGANISATIONEXTRACT_TAB = "#organisationExtract";
const ORGEXTRACT_MATTERREF_INPUT = "input[name='organisations[0].ClientReference']"
const EXTRACTTYPE_SELECT = "#organisationSearchTable > tbody > tr:nth-child(1) > td:nth-child(6) > select";
const INCLUDEPPSR_SELECT = "#organisationSearchTable > tbody > tr:nth-child(1) > td:nth-child(7) > select";
const ACN_ABN_COMPANYNAME_INPUT = "input[name='organisations[0].Identifier']"
const ORDER_BUTTON = "#organisationSearch";
const ORDERLST_LIST = "#orderList";
const ABN_NOT_FOUND_ERROR_MESSAGE = "#organisationSearchTable > tbody > tr:nth-child(3) > td:nth-child(2) > span";
const DOCUMENTSRCH_MATTERREF_INPUT = "input[name='DocumentImages[0].ClientReference']"; 
const DOCUMENTS_TAB = "#documentDetails";
const DOCUMENTS_REFERENCE_NUMBER_INPUT = "input[name='DocumentImages[0].DocumentNumber']";
const DOCUMENTS_VERIFY_BUTTON = "#verifyDocuments";
const DOCUMENTS_ORDER_BUTTON = '#documentDetailsSubmit';
const VERIFY_BEFORE_ORDER_ERROR_MESSAGE = '#documentDetailsForm > form > div:nth-child(4) > span.field-validation-error';
const SEARCH_DOC_BY_ABN_ACN_TAB = '#organisationDocuments';
const CLIENT_REFERENCE_NUMBER = '#ClientReference';
const ORGANISATION_DETAILS_INPUT = '#organisationDetailsNumber';
const PERIOD_SELECT = '#DocumentListPeriodYears';
const LOOKUP_BUTTON = '#organisationDocumentsSearch';
const ORG_DOCUMENTS_CHKBOX = "#documentNumbers > tbody > tr > td:nth-child(1) > input[type=checkbox]:nth-child(2)";
const DOC_ORDER_BUTTON = "#btnOrder";
const PERSONALNAME_TAB = "#personalName";
const PERSONAL_NAME_MATTER_REF_INPUT = "input[name='personalNameSearchViewModel.PersonalNameSearches[0].ClientReference']";
const FIRST_NAME_INPUT = "input[name='personalNameSearchViewModel.PersonalNameSearches[0].GivenName1']";
const SURNAME_INPUT = "input[name='personalNameSearchViewModel.PersonalNameSearches[0].FamilyName']";
const DOB_FROM_INPUT = "#DobStart0";
const DOB_TO_INPUT = "#DobEnd0";
const PERSONAL_EXTRACTTYPE_SELECT = "select[name='personalNameSearchViewModel.PersonalNameSearches[0].InformationType']";
const PERSONAL_LOOKUP_BUTTON = "#Lookup";
const PERSONAL_INFO_CHECKBOX = ".width15 [type='checkbox']";
const PERSONAL_ORDER_BUTTON = "#personalNameOrderTable";
const PROFESSIONAL_TAB = "#professional";
const PROFESSIONAL_MATTERREF_INPUT = "#ClientReference";
const PROFESSIONAL_SURNAME_INPUT = "#BrowseKey";
const PROFESSIONAL_REGISTER_SELECT = "#Register";
const PROFESSIONAL_LOOKUP_BUTTON = "#professinalSearch";
const PROFESSIONAL_INFO_CHECKBOX = "professionalExtractRequests_0__ClientReference";


const webElement_timeout = 10000;

class AsicSearchPage{
    
    static clickProfessional(){
        cy.get(PROFESSIONAL_INFO_CHECKBOX).next("input[type='checkbox']").check();
    }

    static clickProfessionalLookup(){
        cy.get(PROFESSIONAL_LOOKUP_BUTTON).click();
    }

    static selectRegister(register){
        cy.get(PROFESSIONAL_REGISTER_SELECT).select(register)
    }

   static fillProfessionalSurname(){
    cy.fixture('organisationExtractData').then(organisationExtract =>{
        cy.get(PROFESSIONAL_SURNAME_INPUT).type(organisationExtract.surname);
        })
   }
    
    static fillProfessionalMatterRef(){
        cy.generateMatterRef()
        .then((matterRef) =>{
            cy.get(PROFESSIONAL_MATTERREF_INPUT).type(matterRef)
        });
    }

    static clickProfessionalTab(){
        cy.get(PROFESSIONAL_TAB).click();
    }

    static clickPersonalOrderButton(){
        cy.get(PERSONAL_ORDER_BUTTON).find('button').click();
    }

    static selectPersonalNameCheckBox(){
        cy.get(PERSONAL_INFO_CHECKBOX).first().check();
    }

    static clickPersonalLookup(){
        cy.get(PERSONAL_LOOKUP_BUTTON).click();
    }

    //Check Duplicate Code 
    static fillPersonalReferenceNumber(){
        cy.generateMatterRef()
        .then((matterRef) =>{
            cy.get(PERSONAL_NAME_MATTER_REF_INPUT).type(matterRef);
        });        
    }

    static fillFirstName(){
        cy.fixture('organisationExtractData').then(organisationExtract =>{
            cy.get(FIRST_NAME_INPUT).type(organisationExtract.firstName);
            })
    }

    static fillSurname(){
        cy.fixture('organisationExtractData').then(organisationExtract =>{
            cy.get(SURNAME_INPUT).type(organisationExtract.surname);
            })
    }

    static fillDOBFromDate(){
        cy.fixture('organisationExtractData').then(organisationExtract =>{
            cy.get(DOB_FROM_INPUT).type(organisationExtract.dobFrom);
            })
    }

    static fillDOBToDate(){
        cy.fixture('organisationExtractData').then(organisationExtract =>{
            cy.get(DOB_TO_INPUT).type(organisationExtract.dobTo);
            })
    }

    static selectPersonalExtractType(personalExtractType){
        cy.get(PERSONAL_EXTRACTTYPE_SELECT).select(personalExtractType);
    }
    
    static clickPersonalNameTab(){
        cy.get(PERSONALNAME_TAB).click();
    }

    static clickOrderOrgDocuments(){
        cy.get(DOC_ORDER_BUTTON).click();
    }
    
    static selectOrganisationDocument(){
        cy.get(ORG_DOCUMENTS_CHKBOX, {timeout:webElement_timeout})
          .check();
    }

    static clickLookupButton(){
        cy.get(LOOKUP_BUTTON).click();
    }


    static clickDocByABNACNTab(){
        cy.get(SEARCH_DOC_BY_ABN_ACN_TAB).click();
    }

    static fillClientReferenceNumber(){
        cy.generateMatterRef()
        .then((matterRef) =>{
            cy.get(CLIENT_REFERENCE_NUMBER).type(matterRef);
        });        
    }

    static fillACNABNNumber(){
        cy.fixture('organisationExtractData').then(organisationExtract =>{
          cy.get(ORGANISATION_DETAILS_INPUT).type(organisationExtract.acnDocSearch);
        })
    }

    static selectPeriod(period){
        cy.get(PERIOD_SELECT).select(period);
    }

    static clickOrganisationExtractTab(){
        cy.get(ORGANISATIONEXTRACT_TAB).click();
    }

    static fillMatterRef(){

        cy.generateMatterRef()
            .then((matterRef) =>{
                cy.get(ORGEXTRACT_MATTERREF_INPUT).type(matterRef)
            });
    }

    static selectExtractType(extractType){
        cy.get(EXTRACTTYPE_SELECT).select(extractType);
    }

    static selectIncludePPSR(includePPSR){
        cy.get(INCLUDEPPSR_SELECT).select(includePPSR);
    }

    static fillACNABNCompanyName(){
        cy.fixture('organisationExtractData').then(organisationExtract =>{
          cy.get(ACN_ABN_COMPANYNAME_INPUT).type(organisationExtract.acn);
        })
      
    }

    static clickOrderButton(){
        cy.get(ORDER_BUTTON, {timeout: webElement_timeout}).should('be.visible').click();
        
    }

    static clickDocumentOrderButton(){
        cy.get(DOCUMENTS_ORDER_BUTTON).click();
    }

    static getOrderDetails(){
        cy.get(ORDERLST_LIST).contains('ASIC');
    }

    static getErrorMessage(errorMessage){
        cy.get(ABN_NOT_FOUND_ERROR_MESSAGE).contains(errorMessage)
    }

    static fillDocMatterReferenceNumber(){
        cy.generateMatterRef()
        .then((matterRef) =>{
            cy.get(DOCUMENTSRCH_MATTERREF_INPUT).type(matterRef)
        });
    }

    static clickdocumentsTab(){
        cy.get(DOCUMENTS_TAB).click();
    }

    static fillDocReferenceNumber(){
        cy.fixture('organisationExtractData').then(organisationExtract =>{
            cy.get(DOCUMENTS_REFERENCE_NUMBER_INPUT).type(organisationExtract.docNum);
        })
    }

    static clickVerifyButton(){
        cy.get(DOCUMENTS_VERIFY_BUTTON).click();
    }

    static getErrorMessageVerifyBeforeOrder(errorMessage){
        cy.get(VERIFY_BEFORE_ORDER_ERROR_MESSAGE).contains(errorMessage);
    }
}

export default AsicSearchPage