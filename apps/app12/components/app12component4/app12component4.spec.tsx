import { render } from '@testing-library/react';

import App12component4 from './app12component4';

describe('App12component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component4 />);
    expect(baseElement).toBeTruthy();
  });
});
