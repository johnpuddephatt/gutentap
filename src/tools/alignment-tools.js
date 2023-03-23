export default function () {
  return [
    [
      {
        title: "Align text left",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"></path></svg>',
        command: (editor) => {
          editor.chain().focus().setTextAlign("left").run();
        },
        isActiveTest: (editor) => editor.isActive({ textAlign: "left" }),
      },
      {
        title: "Align text centre",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"></path></svg>',
        command: (editor) => {
          editor.chain().focus().setTextAlign("center").run();
        },
        isActiveTest: (editor) => editor.isActive({ textAlign: "center" }),
      },
      {
        title: "Align text right",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"></path></svg>',
        command: (editor) => {
          editor.chain().focus().setTextAlign("right").run();
        },

        isActiveTest: (editor) => editor.isActive({ textAlign: "right" }),
      },
    ],
    [
      {
        title: "Normal width",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 15h14V9H5v6zm0 4.8h14v-1.5H5v1.5zM5 4.2v1.5h14V4.2H5z"></path></svg>',
        command: (editor) => {
          editor.chain().focus().setBlockWidth("normal").run();
        },
        isActiveTest: (editor) => editor.isActive({ blockWidth: "normal" }),
      },
      {
        title: "Wide width",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 9v6h14V9H5zm11-4.8H8v1.5h8V4.2zM8 19.8h8v-1.5H8v1.5z"></path></svg>',
        command: (editor) => {
          editor.chain().focus().setBlockWidth("wide").run();
        },
        isActiveTest: (editor) => editor.isActive({ blockWidth: "wide" }),
      },
      {
        title: "Full width",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 4v11h14V4H5zm3 15.8h8v-1.5H8v1.5z"></path></svg>',
        command: (editor) => {
          editor.chain().focus().setBlockWidth("full").run();
        },
        isActiveTest: (editor) => editor.isActive({ blockWidth: "full" }),
      },
    ],
  ];
}
