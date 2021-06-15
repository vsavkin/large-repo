import { render } from '@testing-library/react';

import App6component21 from './app6component21';

describe('App6component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component21 />);
    expect(baseElement).toBeTruthy();
  });
});
