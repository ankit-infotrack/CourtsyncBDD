const USERNAME_INPUT = '#usernameTextbox';
const PASSWORD_INPUT = '#passwordTextbox';
const LOGIN_BUTTON = 'button[class="css-1hfpgzg"]';

class LoginPage {

    static callPostAPI() {
        cy.request({
            method: 'POST',
            url: 'https://stagesearch.infotrack.com.au/v1/mapping',
            headers: {
                'Content-Type': 'application/json'
            },
            auth: {
                'username': 'ankit',
                'password': 'Hello123!'
            },
            body: {
                "ClientReference": "46443",
                "RetailerReference": "OFX_4fead794-16a6-4e70-bb0e-c0c6cf95ba2c_02ea129a-95c8-7946-9c0f-e1df663b765d_373d865c-09f3-4080-8901-f3e4b0acfac2_Ching' Sree_AWST"
            }

        }).then((res) => {
            cy.log(JSON.stringify(res));
            cy.log('URL is: ', res.body.Url);
            cy.visit(res.body.Url, { failOnStatusCode: false });
            cy.wait(40000);
            cy.url().then(urlValue => {
                let newUrl = new URL(urlValue);
                cy.log('NEW URL: ', newUrl.origin);
                cy.visit(newUrl.origin + '/courtsync', { failOnStatusCode: false });
            });
            cy.wait(9000);
            cy.reload();
            cy.wait(30000);
            //cy.visit('http://stageintegrated.infotrack.com.au/courtsync');
            //cy.wait(30000);

            // //cy.go('https://stageintegrated.infotrack.com.au/courtsync');
            // //cy.wait(13000);
            // cy.window().then(win => win.location.href = 'https://stageintegrated.infotrack.com.au/courtsync');
            // //cy.waitUntil(() => cy.visit('courtsync'));
            // cy.wait(13000);
            // cy.reload();
            // //cy.visit('courtsync');
            // //cy.url().then(urlValue => cy.visit(urlValue + 'https://stageintegrated.infotrack.com.au/courtsync'));
        });
    }

    // static visitLoginPage() {
    //     cy.visit('/');
    // }

    static typeUserName() {
        // cy.visit('/courtsync');
        //cy.visit('https://stageintegrated.infotrack.com.au/courtsync', { failOnStatusCode: false });
        cy.wait(13000);
        cy.fixture('mockData').then(mockData => {
            const username = mockData.username;
            cy.get(USERNAME_INPUT).type(username);
        })
    }

    static typePassword() {
        cy.fixture('mockData').then(mockData => {
            const password = mockData.password;
            cy.get(PASSWORD_INPUT).type(password);
        })
    }

    static submitCredentials() {
        cy.get(LOGIN_BUTTON).click();
    }
}

export default LoginPage