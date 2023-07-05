var assert = require('assert');
const path=require('path');
describe("api pnr gateway", () => {
    it("tests api pnr gateway", async () => {
      // if (error) {
      //   await browser.takeScreenshot();
      // }
      await browser.setWindowSize(811, 625)
      await browser.url("https://xadvpweb1.borders.devnet.sita.aero/api-pnr-portal/security/login")
      browser.maximizeWindow();
      await expect(browser).toHaveUrl("https://xadvpweb1.borders.devnet.sita.aero/api-pnr-portal/security/login")
      await browser.$("#username").click()
      await browser.$("#username").setValue("PSXNV_JXRUM@coforge.com")
      await browser.$("#password").click()
      await browser.$("#password").click()
      await browser.$("#password").setValue("WRqda@12345#")
      await browser.$("//*[@id=\"login\"]/span[1]").click()
      await browser.$("aria/DATA SUBMISSION").click()
      const batchUploadLink = await $("aria/Quick/Batch upload")
      
    await batchUploadLink.waitForDisplayed({ timeout: 3000 })
      await batchUploadLink.click()

      const browse = $("//*[@id=\"main-content\"]/lib-batch-upload/div[2]/div/div/div[2]/div/div[1]/div[2]/div/span/label")

      await browse.waitForDisplayed({ timeout: 3000 })

      await browse.click()
      await browser.pause(5000)
 
      const execFile = require('child_process').execFile;

      let runAutoItScript = function(pathToScript, scriptName) {
        console.info(`\n> Started execution of ${scriptName} ...`);
      
        execFile(`${pathToScript}/${scriptName}`, (error, stdout, stderr) => {
          if (error) {
            throw error;
          } else {
            // > do something with the script output <
            console.info(`\n> Finished execution of ${scriptName}! | Output: ${stdout}`);
          }
        });
      }
      
      runAutoItScript('C:\\Users\\Ashvin.Mewara\\Documents\\Wdio_Project_Plain\\test\\specs\\data', 'Upload_FIle_Script.exe');

       await browser.pause(5000)

       const fileUploadBtn = $('//button[contains(.,"UPLOAD FILE")]')

       fileUploadBtn.waitForDisplayed({ timeout: 3000 })
         
       await fileUploadBtn.click()
        
      await browser.url("https://xadvpweb1.borders.devnet.sita.aero/api-pnr-portal/upload/batch")
      await expect(browser).toHaveUrl("https://xadvpweb1.borders.devnet.sita.aero/api-pnr-portal/upload/batch")
      // await browser.$("aria/STARTING").doubleClick()
      // await browser.$("aria/checking").doubleClick()
      // await browser.$("aria/Loading...").click()
    });
  });