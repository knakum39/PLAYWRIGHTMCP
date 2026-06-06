import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly signInLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLabel = page.locator('text=Sign In');
  }

  /**
   * Navigate to the login page
   */
  async navigateToLoginPage(): Promise<void> {
    await this.page.goto('https://qa.app.waas.sdsaz.us/auth/login');
  }

  /**
   * Verify the SIGN IN label is visible on the page
   */
  async verifySignInLabelIsVisible(): Promise<void> {
    await expect(this.signInLabel).toBeVisible();
  }

  /**
   * Verify the SIGN IN label has the correct text
   */
  async verifySignInLabelText(expectedText: string = 'Sign In'): Promise<void> {
    await expect(this.signInLabel).toHaveText(expectedText);
  }

  /**
   * Complete verification for SIGN IN label
   */
  async verifySignInLabelAppears(): Promise<void> {
    await this.verifySignInLabelIsVisible();
    await this.verifySignInLabelText();
  }
}
