Feature: Organisation Extract

    The ASIC Organisation & Business Names search provides information on organisations and business 
    names recorded on ASICs registers

Background: User is on the ASIC Searches page
    Given the user logs in with valid credentials on web application
    And the user navigates to asic search
    And the user is on Organisation Extract tab

#Done
Scenario Outline: AS-OE-001 Place an order for <CompanyExtract> and <PPSRType>
    When the user enters extract type - '<CompanyExtract>' and PPSR - '<PPSRType>'
    And the user places an order for organisation extract
    Then the user visualizes the organisation extract summary report
    Examples:
        | CompanyExtract                         | PPSRType                    |
        | Current & Historical (2 Year Doc List) | None                        |
        | Current & Historical (1 Year Doc List) | Company Name                |
        | Current & Historical                   | ACN                         |
        | Current (2 Year Doc List)              | ACN & Company Name          |
        | Current (2 Year Doc List)              | None                        |

#Done
Scenario Outline: AS-OE-002 User is notified about unavailable ABN for <CompanyExtract> and <PPSRType>
    When the user enters extract type - '<CompanyExtract>' and PPSR - '<PPSRType>'
    Then user visualizes an error message - 'Related ABN was not found. PPSR will not be included for this extract.'
    Examples:
       | CompanyExtract           | PPSRType                  |
       | Current & Historical     | ACN, ABN and Company Name |
       | Relational               | ACN, ABN and Company Name |
       | Current (1 Year Doc List)| ABN                       |

# Done1
Scenario Outline: AS-OE-003 Place an order for Company Extract only <CompanyExtract>
    When the user enters extract type - '<CompanyExtract>' and PPSR - '<PPSRType>'
    And the user places an order for organisation extract
    Then the user visualizes the organisation extract summary report
    Examples:
       | CompanyExtract           | PPSRType|
       | Current & Historical     | None    |
       | Relational               | None    |
       | Current (1 Year Doc List)| None    |
       | Current (2 Year Doc List)| None    |