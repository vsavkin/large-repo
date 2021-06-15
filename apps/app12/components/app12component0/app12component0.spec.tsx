import { render } from '@testing-library/react';

import App12component0 from './app12component0';

describe('App12component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component0 />);
    expect(baseElement).toBeTruthy();
  });
});
