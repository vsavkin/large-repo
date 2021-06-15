import { render } from '@testing-library/react';

import App12component31 from './app12component31';

describe('App12component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component31 />);
    expect(baseElement).toBeTruthy();
  });
});
