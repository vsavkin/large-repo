import { render } from '@testing-library/react';

import App6component64 from './app6component64';

describe('App6component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component64 />);
    expect(baseElement).toBeTruthy();
  });
});
