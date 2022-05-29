describe("render the homepage elements", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    //  cy.visit("https://mhykol.dev")
    })
    it("help menu is visible", () => {
        cy.get("#help").should("exist")
        cy.wait(300)
    })
    it("CLI menu is interactive", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
    })
})   
describe("commands", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("help", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("help{enter}")
        cy.wait(300)
    })
    it("cv", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("cv{enter}")
        cy.wait(300)
    })
    it("sum", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("sum{enter}")
        cy.wait(300)
    })
    it("about", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("about{enter}")
        cy.wait(300)
    })
    it("github", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("github{enter}")
        cy.wait(300)
    })
    it("email", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("email{enter}")
        cy.wait(300)
    })
    it("ascii", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("ascii{enter}")
        cy.wait(300)
    })
    it("socials", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("socials{enter}")
        cy.wait(300)
    })
    it("linkedin", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("linkedin{enter}")
        cy.wait(300)
    })
    it("banner", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("banner{enter}")
        cy.wait(300)
    })
    it("date", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("date{enter}")
        cy.wait(300)
    })
    it("echo", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("echo{enter}")
        cy.wait(300)
    })
    it("git", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("git{enter}")
        cy.wait(300)
    })
    it("cd", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("cd{enter}")
        cy.wait(300)
    })
    it("ls", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("ls{enter}")
        cy.wait(300)
    })
    it("readme", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("readme{enter}")
        cy.wait(300)
    })
    it("user", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("user{enter}")
        cy.wait(300)
    })
    it("repo", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("repo{enter}")
        cy.wait(300)
    })
})
describe("API", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("quote", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("quote{enter}")
        cy.wait(300)
    })
    it("pokemon", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("pokemon{enter}")
        cy.wait(300)
    })
    it("projects", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("projects{enter}")
        cy.wait(300)
    })
    it("google", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("google example search{enter}")
        cy.wait(300)
    })
    it("reddit", () => {
        cy.get("#prompt").should("exist")
        cy.get("#prompt").click();
        cy.wait(300)
        cy.get("#prompt").type("reddit example search{enter}")
        cy.wait(300)
    })
})    