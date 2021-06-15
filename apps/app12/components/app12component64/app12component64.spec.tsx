import { render } from '@testing-library/react';

import App12component64 from './app12component64';

describe('App12component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component64 />);
    expect(baseElement).toBeTruthy();
  });
});
