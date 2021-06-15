import { render } from '@testing-library/react';

import App9component4 from './app9component4';

describe('App9component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component4 />);
    expect(baseElement).toBeTruthy();
  });
});
