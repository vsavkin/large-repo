import { render } from '@testing-library/react';

import App6component7 from './app6component7';

describe('App6component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component7 />);
    expect(baseElement).toBeTruthy();
  });
});
