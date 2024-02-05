const SelectIcon = selected =>
  selected
    ? `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#0086FF"/>
<path d="M18.48 10.6413L12.32 16.8013L9.52002 14.0013" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 `
    : `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="13.5" stroke="#B9B9B9"/>
</svg>
`;

export default SelectIcon;
