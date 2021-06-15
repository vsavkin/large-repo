import { render } from '@testing-library/react';

import App12component30 from './app12component30';

describe('App12component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component30 />);
    expect(baseElement).toBeTruthy();
  });
});
