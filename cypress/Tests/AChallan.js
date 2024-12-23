describe("Download A-Challan", () => {
    
    before(() => {
        cy.fixture('data').then(function(data) {
            this.data = data; 
        });
    });

    it("Download A-Challan for multiple TINs", function() {
        this.data.forEach((entry) => {
            cy.visit('/');
            cy.get("div[class='dropbtn'] div").contains("এনবিআর এর জমা").parent().click({ force: true });
            cy.get("a[data-challan-type-name-bn='কোম্পানিসমূহ কর্তৃক দেয় আয়কর']").click({ force: true });
            cy.get("input[placeholder='করদাতা ব্যক্তি বা প্রতিষ্ঠানের টিআইএন']").type(entry.TIN);
            cy.wait(2000);
            cy.reload()
        });
    });
});
