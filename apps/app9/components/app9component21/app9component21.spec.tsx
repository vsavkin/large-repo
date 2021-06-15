import { render } from '@testing-library/react';

import App9component21 from './app9component21';

describe('App9component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component21 />);
    expect(baseElement).toBeTruthy();
  });
});
