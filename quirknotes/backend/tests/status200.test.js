test("1+2=3, empty array is empty", () => {
    expect(1 + 2).toBe(3);
    expect([].length).toBe(0);
  });

  const SERVER_URL = "http://localhost:4000";


  test("/patchNote - Patch with content and title", async () => {
    // Code here
    const noteId = "65ced404da6aa3930974203b";
    const title = "NoteTitleTestPatch";
    const content = "NoteTitleContentPatch";
  
    const patchNoteRes = await fetch(`${SERVER_URL}/patchNote/${noteId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
  
    const patchNoteBody = await patchNoteRes.json();
  
    expect(patchNoteRes.status).toBe(200);
    expect(patchNoteBody.response).toStrictEqual(`Document with ID ${noteId} patched.`);
  });
  
  test("/patchNote - Patch with just title", async () => {
    // Code here
    const noteId = "65ced404da6aa3930974203b";
    const title = "NoteTitleTestPatch";
  
    const patchNoteRes = await fetch(`${SERVER_URL}/patchNote/${noteId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      }),
    });
  
    const patchNoteBody = await patchNoteRes.json();
  
    expect(patchNoteRes.status).toBe(200);
    expect(patchNoteBody.response).toStrictEqual(`Document with ID ${noteId} patched.`);
  });
  
  test("/patchNote - Patch with just content", async () => {
    // Code here
    const noteId = "65ced404da6aa3930974203b";
    const content = "NoteTitleContentPatch";
  
    const patchNoteRes = await fetch(`${SERVER_URL}/patchNote/${noteId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
    });
  
    const patchNoteBody = await patchNoteRes.json();
  
    expect(patchNoteRes.status).toBe(200);
    expect(patchNoteBody.response).toStrictEqual(`Document with ID ${noteId} patched.`);
  });

  test("/updateNoteColor - Update color of a note to red (#FF0000)", async () => {
    // Code here
    const noteId = "65ced404da6aa3930974203b";
    const updateColorRes = await fetch(`${SERVER_URL}/updateNoteColor/${noteId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        color: '#FF0000'
      }),
    });
  
    const updateColorBody = await updateColorRes.json();
  
    expect(updateColorRes.status).toBe(200);
    expect(updateColorBody.message).toStrictEqual('Note color updated successfully.');
  
  });

  test("/deleteNote - Delete a note", async () => {

    const noteId = "65ced404da6aa3930974203b";
    const deleteNoteRes = await fetch(`${SERVER_URL}/deleteNote/${noteId}`, {
      method: "DELETE"
    });
  
    const deleteNoteBody = await deleteNoteRes.json();
  
    expect(deleteNoteRes.status).toBe(200);
    expect(deleteNoteBody.response).toStrictEqual(`Document with ID ${noteId} deleted.`);
  
  });

  test("/getAllNotes - Return list of zero notes for getAllNotes", async () => {
    // Code here
    const getAllNotesRes = await fetch(`${SERVER_URL}/getAllNotes`, {
      method: "GET"
    });
  
    const getAllNotesBody = await getAllNotesRes.json();
    const empty_arr = [];
    expect(getAllNotesRes.status).toBe(200);
    expect(getAllNotesBody.response).toStrictEqual(empty_arr);
  
  });

  test("/postNote - Post a note", async () => {
  const title = "NoteTitleTest";
  const content = "NoteTitleContent";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });

  const postNoteBody = await postNoteRes.json();

  expect(postNoteRes.status).toBe(200);
  expect(postNoteBody.response).toBe("Note added succesfully.");

  
});

test("/deleteAllNotes - Delete one note", async () => {
  // Code here
  const delAllNotesRes = await fetch(`${SERVER_URL}/deleteAllNotes`, {
    method: "DELETE"
  });

  const delAllNotesBody = await delAllNotesRes.json();
  expect(delAllNotesRes.status).toBe(200);
  expect(delAllNotesBody.response).toBe("1 note(s) deleted.");
});


test("/deleteAllNotes - Delete three notes", async () => {
  // Code here

  const title1 = "NoteTitleTest1";
  const content1 = "NoteTitleContent1";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title1,
      content: content1,
    }),
  });

  const title2 = "NoteTitleTest2";
  const content2 = "NoteTitleContent2";

  const postNoteRes2 = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title2,
      content: content2,
    }),
  });

  const title3 = "NoteTitleTest3";
  const content3 = "NoteTitleContent3";

  const postNoteRes3 = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title3,
      content: content3,
    }),
  });


  const delAllNotesRes = await fetch(`${SERVER_URL}/deleteAllNotes`, {
    method: "DELETE"
  });

  const delAllNotesBody = await delAllNotesRes.json();
  expect(delAllNotesRes.status).toBe(200);
  expect(delAllNotesBody.response).toBe("3 note(s) deleted.");
});

test("/getAllNotes - Return list of two notes for getAllNotes", async () => {
  // Code here
  //******not correct response from backend?? */

  const title1 = "NoteTitleTest1";
  const content1 = "NoteTitleContent1";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title1,
      content: content1,
    }),
  });

  const title2 = "NoteTitleTest2";
  const content2 = "NoteTitleContent2";

  const postNoteRes2 = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title2,
      content: content2,
    }),
  });


  const getAllNotesRes = await fetch(`${SERVER_URL}/getAllNotes`, {
    method: "GET"
  });

  const getAllNotesBody = await getAllNotesRes.json();
  const empty_arr = [];
  expect(getAllNotesRes.status).toBe(200);
  expect(getAllNotesBody.response).toStrictEqual(empty_arr);
  
});
