import { render } from '@testing-library/react';

import App12component11 from './app12component11';

describe('App12component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component11 />);
    expect(baseElement).toBeTruthy();
  });
});
