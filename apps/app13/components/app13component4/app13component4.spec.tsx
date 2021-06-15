import { render } from '@testing-library/react';

import App13component4 from './app13component4';

describe('App13component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component4 />);
    expect(baseElement).toBeTruthy();
  });
});
