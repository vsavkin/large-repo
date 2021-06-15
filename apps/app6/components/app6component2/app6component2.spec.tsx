import { render } from '@testing-library/react';

import App6component2 from './app6component2';

describe('App6component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component2 />);
    expect(baseElement).toBeTruthy();
  });
});
