import { render } from '@testing-library/react';

import App10component4 from './app10component4';

describe('App10component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component4 />);
    expect(baseElement).toBeTruthy();
  });
});
