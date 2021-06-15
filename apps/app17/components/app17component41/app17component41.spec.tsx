import { render } from '@testing-library/react';

import App17component41 from './app17component41';

describe('App17component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component41 />);
    expect(baseElement).toBeTruthy();
  });
});
