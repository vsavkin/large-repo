import { render } from '@testing-library/react';

import Components16 from './components16';

describe('Components16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components16 />);
    expect(baseElement).toBeTruthy();
  });
});
