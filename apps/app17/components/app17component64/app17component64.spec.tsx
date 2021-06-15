import { render } from '@testing-library/react';

import App17component64 from './app17component64';

describe('App17component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component64 />);
    expect(baseElement).toBeTruthy();
  });
});
