import { render } from '@testing-library/react';

import App13component30 from './app13component30';

describe('App13component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component30 />);
    expect(baseElement).toBeTruthy();
  });
});
