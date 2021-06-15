import { render } from '@testing-library/react';

import App12component23 from './app12component23';

describe('App12component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component23 />);
    expect(baseElement).toBeTruthy();
  });
});
