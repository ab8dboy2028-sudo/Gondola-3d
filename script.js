function generate() {
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  const type = document.getElementById('type').value;
  const height = document.getElementById('height').value;

  if (!length || !width) {
    alert('請輸入店面尺寸');
    return;
  }

  const layout = document.getElementById('layout');
  const result = document.getElementById('result');

  layout.innerHTML = '';

  const scale = 40;

  layout.style.width = `${length * scale + 80}px`;
  layout.style.height = `${width * scale + 80}px`;

  // 上方尺寸
  for (let i = 0; i <= length; i++) {
    const label = document.createElement('div');
    label.innerText = `${i}m`;
    label.style.position = 'absolute';
    label.style.left = `${40 + i * scale}px`;
    label.style.top = '5px';
    label.style.fontSize = '12px';
    label.style.color = 'white';
    layout.appendChild(label);
  }

  // 左邊尺寸
  for (let i = 0; i <= width; i++) {
    const label = document.createElement('div');
    label.innerText = `${i}m`;
    label.style.position = 'absolute';
    label.style.left = '5px';
    label.style.top = `${40 + i * scale}px`;
    label.style.fontSize = '12px';
    label.style.color = 'white';
    layout.appendChild(label);
  }

  // 自動計算組數
  const rackCount = Math.floor((length * width) / 2);

  // 畫架子
  for (let i = 0; i < rackCount; i++) {
    const rack = document.createElement('div');

    if (type === 'double') {
      rack.className = 'rack-double';
      rack.style.width = '36px';   // 90cm
      rack.style.height = '28px';  // 約 70cm
    } else {
      rack.className = 'rack-single';
      rack.style.width = '36px';   // 90cm
      rack.style.height = '14px';  // 35cm
    }

    rack.style.left = `${60 + (i % 8) * 55}px`;
    rack.style.top = `${60 + Math.floor(i / 8) * 45}px`;

    layout.appendChild(rack);
  }

  // 配件計算
  let kaki = 0;
  let mesh = 0;
  let tatakan = 0;
  let shelf25 = 0;
  let shelf30 = 0;

  if (type === 'single' && height === '150') {
    kaki = rackCount * 2;
    mesh = rackCount * 1;
    tatakan = rackCount * 8;
    shelf25 = rackCount * 4;
    shelf30 = rackCount * 1;
  }

  if (type === 'single' && height === '180') {
    kaki = rackCount * 2;
    mesh = rackCount * 1;
    tatakan = rackCount * 8;
    shelf25 = rackCount * 4;
    shelf30 = rackCount * 1;
  }

  if (type === 'double' && height === '150') {
    kaki = rackCount * 2;
    mesh = rackCount * 1;
    tatakan = rackCount * 12;
    shelf25 = rackCount * 6;
    shelf30 = rackCount * 2;
  }

  if (type === 'double' && height === '180') {
    kaki = rackCount * 2;
    mesh = rackCount * 1;
    tatakan = rackCount * 16;
    shelf25 = rackCount * 8;
    shelf30 = rackCount * 2;
  }

  const baut = rackCount * 4;

  result.innerHTML = `
    店面尺寸：${length}m × ${width}m<br><br>

    架型：${type === 'double' ? 'Double 雙面架' : 'Single 單面架'}<br>
    高度：${height}cm<br>
    預估可放：約 ${rackCount} 組超商架<br><br>

    配件需求：<br>
    Kaki ${height}cm：${kaki} pcs<br>
    Wire Mesh ${height}cm：${mesh} pcs<br>
    Tatakan：${tatakan} pcs<br>
    Shelving 25cm：${shelf25} pcs<br>
    Shelving 30cm：${shelf30} pcs<br>
    Baut：${baut} pcs
  `;
}