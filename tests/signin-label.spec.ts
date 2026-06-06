import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

//LoginPage.ts is the POM file

test.describe('Sign In Label Verification', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test('Verify SIGN IN label appears on login page', async () => {
    // Step 1: Navigate to qa.app.waas.sdsaz.us/auth/login
    await loginPage.navigateToLoginPage();

    // Step 2: Search for the SIGN IN label
    const signInElement = loginPage.signInLabel;

    // Step 3: Verify "SIGN IN" label shows on the page
    await loginPage.verifySignInLabelAppears();
  });
});
