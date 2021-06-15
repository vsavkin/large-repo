import { render } from '@testing-library/react';

import App12component22 from './app12component22';

describe('App12component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component22 />);
    expect(baseElement).toBeTruthy();
  });
});
