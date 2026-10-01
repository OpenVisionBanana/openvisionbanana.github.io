const taskData = {
  semantic: {
    readout: "nearest prompted color → class label",
    examples: [
      {
        title: "Semantic segmentation · Cityscapes",
        caption: "OVB 9B · one prompted legend; single-pass decoded mask.",
        prompt: "Paint the requested Cityscapes classes with their assigned colors.",
        outputLabel: "Decoded semantic mask",
        input: "static/images/paper/city-input.webp",
        inputAlt: "Cityscapes street scene with parked cars",
        output: "static/images/paper/city-prediction.png",
        outputAlt: "Color-coded semantic mask of the street, buildings, cars, and sky"
      },
      {
        title: "Semantic segmentation · COCO-Object",
        caption: "OVB 9B · one grouped prediction; 80 classes are prompted in four groups.",
        prompt: "Paint the requested object classes with their assigned colors.",
        outputLabel: "Decoded semantic mask",
        input: "static/images/paper/coco-input.jpg",
        inputAlt: "A cat and a dog on a couch",
        output: "static/images/paper/coco-prediction.png",
        outputAlt: "Color-coded masks for the cat, dog, and couch"
      },
      {
        title: "Semantic segmentation · Cityscapes",
        caption: "OVB 9B · another single-pass decoded mask from the main paper.",
        prompt: "Paint the requested Cityscapes classes with their assigned colors.",
        outputLabel: "Decoded semantic mask",
        input: "static/images/paper/city-2-input.webp",
        inputAlt: "Another Cityscapes street scene",
        output: "static/images/paper/city-2-prediction.webp",
        outputAlt: "Color-coded semantic prediction for the second street scene"
      }
    ]
  },
  instance: {
    readout: "distinct color regions → instance masks",
    examples: [{
      title: "Instance segmentation · SA-Co/Gold",
      caption: "OVB 9B · each dried apricot receives its own color.",
      prompt: "Segment every dried apricot using a different listed color for each instance.",
      outputLabel: "Generated instance colors",
      input: "static/images/paper/instance-input.jpg",
      inputAlt: "Dried apricots on a wooden table",
      output: "static/images/paper/instance-prediction.png",
      outputAlt: "Individual dried apricots painted in distinct colors on black"
    }, {
      title: "Instance segmentation · SA-Co/Gold",
      caption: "OVB 9B · each person receives a distinct color.",
      prompt: "Segment each person with a different color; leave the background black.",
      outputLabel: "Generated instance colors",
      input: "static/images/paper/instance-person-input.webp",
      inputAlt: "People in an SA-Co/Gold example",
      output: "static/images/paper/instance-person-prediction.webp",
      outputAlt: "People segmented with separate colors on black"
    }, {
      title: "Instance segmentation · SA-Co/Gold",
      caption: "OVB 9B · individual gummy candies are color-coded.",
      prompt: "Segment each gummy candy with a different color; leave the background black.",
      outputLabel: "Generated instance colors",
      input: "static/images/paper/instance-candy-input.webp",
      inputAlt: "Gummy candies in an SA-Co/Gold example",
      output: "static/images/paper/instance-candy-prediction.webp",
      outputAlt: "Individual gummy candies painted in separate colors on black"
    }]
  },
  referring: {
    readout: "prompted foreground color → binary mask",
    examples: [{
      title: "Referring segmentation · RefCOCOg",
      caption: "OVB 9B · original referring expression.",
      prompt: 'Segment “Woman in dark blue jacket with red and black scarf.”',
      outputLabel: "Generated referring mask",
      input: "static/images/paper/referring-input.webp",
      inputAlt: "Three people under a red canopy",
      output: "static/images/paper/referring-prediction.png",
      outputAlt: "The referred person painted in color on black"
    }, {
      title: "Referring segmentation · RefCOCOg",
      caption: "OVB 9B · original referring expression.",
      prompt: 'Segment “A boy in a blue shirt about to blow out his candles.”',
      outputLabel: "Generated referring mask",
      input: "static/images/paper/referring-boy-input.webp",
      inputAlt: "Boy at a birthday celebration",
      output: "static/images/paper/referring-boy-prediction.webp",
      outputAlt: "The boy in the blue shirt selected by the referring mask"
    }, {
      title: "Referring segmentation · RefCOCOg",
      caption: "OVB 9B · fine-grained object boundary example.",
      prompt: 'Segment “A black ancient Greek vase with figures.”',
      outputLabel: "Generated referring mask",
      input: "static/images/paper/referring-vase-input.webp",
      inputAlt: "Black ancient Greek vase with figures",
      output: "static/images/paper/referring-vase-prediction.webp",
      outputAlt: "Predicted mask outlining the Greek vase"
    }]
  },
  reasoning: {
    readout: "prompted foreground color → binary mask",
    examples: [{
      title: "Reasoning segmentation · ReasonSeg",
      caption: "OVB 9B · raw query, without the rewrite used for the benchmark score below.",
      prompt: 'Segment “the place where piano players should sit.”',
      outputLabel: "Generated reasoning mask",
      input: "static/images/paper/reasoning-input.webp",
      inputAlt: "Grand piano and piano bench in a room",
      output: "static/images/paper/reasoning-prediction.png",
      outputAlt: "Piano bench painted in color on black"
    }, {
      title: "Reasoning segmentation · ReasonSeg",
      caption: "OVB 9B · raw reasoning query, without rewriting.",
      prompt: 'Segment “After cooking, consuming food, and preparing for food, where can we throw away the rest of the food and scraps?”',
      outputLabel: "Generated reasoning mask",
      input: "static/images/paper/reasoning-bin-input.webp",
      inputAlt: "Indoor scene with a place for food scraps",
      output: "static/images/paper/reasoning-bin-prediction.webp",
      outputAlt: "Predicted region for disposing of food scraps"
    }, {
      title: "Reasoning segmentation · ReasonSeg",
      caption: "OVB 9B · raw reasoning query, without rewriting.",
      prompt: 'Segment “If you want to play table tennis indoors, what furniture in the picture should be used as the playing surface?”',
      outputLabel: "Generated reasoning mask",
      input: "static/images/paper/reasoning-table-input.webp",
      inputAlt: "Indoor scene with a table for table tennis",
      output: "static/images/paper/reasoning-table-prediction.webp",
      outputAlt: "Predicted table surface for the reasoning query"
    }]
  },
  depth: {
    readout: "grayscale → relative depth; align for evaluation",
    examples: [{
      title: "Relative depth · NYUv2",
      caption: "OVB 9B · aligned depth visualization from the main-paper comparison; color shows relative distance.",
      prompt: "Generate relative inverse depth: near points bright, far points dark, matching input pixels.",
      outputLabel: "Aligned depth visualization",
      input: "static/images/paper/depth-input.webp",
      inputAlt: "NYUv2 bedroom with a bed in the foreground",
      output: "static/images/paper/depth-prediction.webp",
      outputAlt: "Colorized relative depth prediction for the bedroom"
    }, {
      title: "Relative depth · ETH3D",
      caption: "OVB Klein 9B (50K) · neutral inverse depth; near points are bright.",
      prompt: "Generate relative inverse depth: near points bright, far points dark, matching input pixels.",
      outputLabel: "Inverse depth prediction",
      input: "static/images/paper/depth-eth3d-input.webp",
      inputAlt: "ETH3D scene used in the paper's depth comparison",
      output: "static/images/paper/depth-eth3d-prediction.webp",
      outputAlt: "Grayscale inverse depth prediction for the ETH3D scene"
    }, {
      title: "Relative depth · iBims-1",
      caption: "OVB Klein 9B (50K) · neutral inverse depth; near points are bright.",
      prompt: "Generate relative inverse depth: near points bright, far points dark, matching input pixels.",
      outputLabel: "Inverse depth prediction",
      input: "static/images/paper/depth-ibims-input.webp",
      inputAlt: "iBims-1 indoor scene used in the paper's depth comparison",
      output: "static/images/paper/depth-ibims-prediction.webp",
      outputAlt: "Grayscale inverse depth prediction for the iBims-1 scene"
    }]
  },
  normals: {
    readout: "RGB channels → camera-space normal vectors",
    examples: [{
      title: "Surface normals · iBims-1",
      caption: "OVB Klein 9B (50K ablation) · RGB encodes camera-space orientation.",
      prompt: "Encode camera-space surface normals in the RGB channels.",
      outputLabel: "Generated normal map",
      input: "static/images/paper/normals-ibims-input.webp",
      inputAlt: "iBims-1 indoor scene used in the paper's surface-normal comparison",
      output: "static/images/paper/normals-ibims-prediction.webp",
      outputAlt: "RGB surface-normal prediction for the iBims-1 scene"
    }, {
      title: "Surface normals · ScanNet",
      caption: "OVB 9B · zero-shot ScanNet prediction; RGB encodes camera-space orientation.",
      prompt: "Encode camera-space surface normals in the RGB channels.",
      outputLabel: "Generated normal map",
      input: "static/images/paper/normals-input.webp",
      inputAlt: "ScanNet scene with a cylindrical bin beside cabinetry",
      output: "static/images/paper/normals-prediction.webp",
      outputAlt: "Zero-shot OVB 9B surface-normal map of the bin and surrounding surfaces"
    }, {
      title: "Surface normals · NYUv2",
      caption: "OVB Klein 9B (50K ablation) · RGB encodes camera-space orientation.",
      prompt: "Encode camera-space surface normals in the RGB channels.",
      outputLabel: "Generated normal map",
      input: "static/images/paper/normals-nyu-input.webp",
      inputAlt: "NYUv2 indoor scene used in the paper's surface-normal comparison",
      output: "static/images/paper/normals-nyu-prediction.webp",
      outputAlt: "RGB surface-normal prediction for the NYUv2 scene"
    }]
  },
  editing: {
    readout: null,
    examples: [{
      title: "Image editing · ImgEdit-Bench",
      caption: "OVB 9B · retained editing ability after perception training.",
      prompt: "Remove the green armchair.",
      outputLabel: "OVB image edit",
      input: "static/images/paper/editing-input.webp",
      inputAlt: "Room with a green armchair",
      output: "static/images/paper/editing-output.webp",
      outputAlt: "Same room after the green armchair is removed"
    }, {
      title: "Image editing · ImgEdit-Bench",
      caption: "OVB 9B · add an object to the scene.",
      prompt: "Add a group of deer grazing in the middle-right of the snow-covered field.",
      outputLabel: "OVB image edit",
      input: "static/images/paper/editing-deer-input.webp",
      inputAlt: "Snow-covered field before deer are added",
      output: "static/images/paper/editing-deer-output.webp",
      outputAlt: "Snow-covered field with deer added"
    }, {
      title: "Image editing · ImgEdit-Bench",
      caption: "OVB 9B · replace an object in the scene.",
      prompt: "Replace the brown suitcase with a large potted plant.",
      outputLabel: "OVB image edit",
      input: "static/images/paper/editing-plant-input.webp",
      inputAlt: "Scene with a brown suitcase",
      output: "static/images/paper/editing-plant-output.webp",
      outputAlt: "Same scene with a potted plant in place of the suitcase"
    }]
  }
};

const demo = document.querySelector("[data-task-demo]");
if (demo) {
  const tabs = [...demo.querySelectorAll("[data-task]")];
  const panel = demo.querySelector("[role=tabpanel]");
  const prompt = demo.querySelector("[data-prompt]");
  const inputImage = demo.querySelector("[data-input-image]");
  const comparison = demo.querySelector("[data-prediction-comparison]");
  const comparisonImage = demo.querySelector("[data-comparison-image]");
  const outputImage = demo.querySelector("[data-output-image]");
  const outputLabel = demo.querySelector("[data-output-label]");
  const readout = demo.querySelector(".decode-step");
  const decoder = demo.querySelector("[data-decoder]");
  const title = demo.querySelector("[data-example-title]");
  const caption = demo.querySelector("[data-example-caption]");
  const controls = demo.querySelector("[data-example-nav]");
  const count = demo.querySelector("[data-example-count]");
  let currentTask = "semantic";
  let currentExample = 0;

  const renderExample = () => {
    const task = taskData[currentTask];
    const example = task.examples[currentExample];
    inputImage.src = example.input;
    inputImage.alt = example.inputAlt;
    comparisonImage.src = example.input;
    outputImage.src = example.output;
    outputImage.alt = example.outputAlt;
    prompt.textContent = example.prompt;
    outputLabel.textContent = example.outputLabel;
    decoder.textContent = task.readout ?? "";
    readout.hidden = task.readout === null;
    title.textContent = example.title;
    caption.textContent = example.caption;
    controls.hidden = task.examples.length < 2;
    count.textContent = `${currentExample + 1} / ${task.examples.length}`;
  };

  const selectTask = (tab, focus = false) => {
    currentTask = tab.dataset.task;
    currentExample = 0;
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", tab.id);
    renderExample();
    if (focus) tab.focus();
  };

  let taskCycle = setInterval(() => {
    const index = tabs.findIndex((tab) => tab.dataset.task === currentTask);
    selectTask(tabs[(index + 1) % tabs.length]);
  }, 3000);

  const stopTaskCycle = () => {
    if (taskCycle !== null) {
      clearInterval(taskCycle);
      taskCycle = null;
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      stopTaskCycle();
      selectTask(tab);
    });
    tab.addEventListener("keydown", (event) => {
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault();
      stopTaskCycle();
      selectTask(tabs[next], true);
    });
  });

  const changeExample = (step) => {
    stopTaskCycle();
    const total = taskData[currentTask].examples.length;
    currentExample = (currentExample + step + total) % total;
    renderExample();
  };
  demo.querySelector("[data-previous-example]").addEventListener("click", () => changeExample(-1));
  demo.querySelector("[data-next-example]").addEventListener("click", () => changeExample(1));

  const updateReveal = (event) => {
    if (event.pointerType === "touch") return;
    const bounds = comparison.getBoundingClientRect();
    comparison.style.setProperty("--reveal-x", `${event.clientX - bounds.left}px`);
    comparison.style.setProperty("--reveal-y", `${event.clientY - bounds.top}px`);
    comparison.classList.add("is-revealing");
  };
  comparison.addEventListener("pointerenter", updateReveal);
  comparison.addEventListener("pointermove", updateReveal);
  comparison.addEventListener("pointerleave", () => comparison.classList.remove("is-revealing"));
}

const mascot = document.querySelector("[data-mascot]");
if (mascot) {
  let mascotClicks = 0;
  let clickReset;

  const launchBananas = () => {
    const bounds = mascot.getBoundingClientRect();
    const originX = bounds.left + bounds.width * 0.55;
    const originY = bounds.top + bounds.height * 0.48;
    const amount = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 8 : 30;

    mascot.classList.remove("is-celebrating");
    void mascot.offsetWidth;
    mascot.classList.add("is-celebrating");

    for (let index = 0; index < amount; index += 1) {
      const banana = document.createElement("span");
      const angle = (Math.PI * 2 * index) / amount + (Math.random() - 0.5) * 0.45;
      const distance = 130 + Math.random() * 330;
      banana.className = "banana-confetti";
      banana.textContent = "🍌";
      banana.setAttribute("aria-hidden", "true");
      banana.style.setProperty("--left", `${originX}px`);
      banana.style.setProperty("--top", `${originY}px`);
      banana.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      banana.style.setProperty("--y", `${Math.sin(angle) * distance + 80}px`);
      banana.style.setProperty("--rotation", `${Math.round((Math.random() - 0.5) * 900)}deg`);
      banana.style.setProperty("--duration", `${900 + Math.random() * 650}ms`);
      banana.style.setProperty("--delay", `${Math.random() * 100}ms`);
      document.body.appendChild(banana);
      banana.addEventListener("animationend", () => banana.remove());
    }
  };

  const registerMascotClick = () => {
    mascotClicks += 1;
    clearTimeout(clickReset);
    clickReset = setTimeout(() => { mascotClicks = 0; }, 1800);
    if (mascotClicks >= 3) {
      mascotClicks = 0;
      launchBananas();
    }
  };

  mascot.addEventListener("click", registerMascotClick);
  mascot.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      registerMascotClick();
    }
  });
}

const copyButton = document.querySelector("[data-copy-bib]");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const bibtex = document.getElementById("bibtex")?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(bibtex);
      copyButton.textContent = "Copied";
      setTimeout(() => { copyButton.textContent = "Copy"; }, 1600);
    } catch {
      copyButton.textContent = "Select text";
    }
  });
}
