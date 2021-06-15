import { render } from '@testing-library/react';

import App6component3 from './app6component3';

describe('App6component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component3 />);
    expect(baseElement).toBeTruthy();
  });
});
