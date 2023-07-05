var assert = require('assert');

describe('This Example show usage of uploadFile() command of WebDriverIO',()=> {
    it('should be able to successfully upload the File from your Native System ',()=> {
        browser.url("https://the-internet.herokuapp.com/");
        browser.maximizeWindow();
        browser.pause(3000);
        let fileUploadLink = $('//a[contains(text(),"File Upload")]');
        fileUploadLink.scrollIntoView();
        fileUploadLink.click();
        browser.pause(8000);
        const filePath = "/home/ajay/Downloads/Batch_Submission_EY.xlsx"; 
        const remoteFilePath = browser.uploadFile(filePath);
        let fileUpload = $('//input[@id = "file-upload"]');
        fileUpload.setValue(remoteFilePath); //this remoteFilePath location would vary as per your native system
        $('//input[@id = "file-submit"]').click();
        let fileUploadSuccessMessage = $("//h3[contains(text(),'File Uploaded!')]");
        assert.equal(fileUploadSuccessMessage.getText(),'File Uploaded!');
    });
});