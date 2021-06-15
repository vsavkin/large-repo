import { render } from '@testing-library/react';

import App9component30 from './app9component30';

describe('App9component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component30 />);
    expect(baseElement).toBeTruthy();
  });
});
