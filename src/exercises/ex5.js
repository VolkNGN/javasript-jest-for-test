const hoverArea = document.getElementById('hover-area');
const interactionResult = document.getElementById('interaction-result');

hoverArea.addEventListener('mouseover', () => {
  interactionResult.textContent = 'You are hovering over the area!';
});

hoverArea.addEventListener('mouseout', () => {
  interactionResult.textContent = 'Hover over the area.';
});
