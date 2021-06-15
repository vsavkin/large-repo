import { render } from '@testing-library/react';

import App6component12 from './app6component12';

describe('App6component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component12 />);
    expect(baseElement).toBeTruthy();
  });
});
