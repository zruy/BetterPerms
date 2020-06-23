
import { ProjectOnePage } from './app.po';

describe('project-one App', () => {
  let page: ProjectOnePage;

  beforeEach(() => {
    page = new ProjectOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});