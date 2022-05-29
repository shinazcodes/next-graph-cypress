// A mock function to mimic making an async request for data

export function fetchPage(page = "1"): Promise<{ submittedPage: string }> {
  return new Promise((resolve) =>
    setTimeout(() => {
      // let nextPage = "1";
      // {
      //   switch (page) {
      //     case "1":
      //       nextPage = "2"
      //       break;
      //     case "2-1":
      //       nextPage = "2-2"
      //       break;
      //     case "2-2":
      //       nextPage = "3"
      //       break;

      //     case "3":
      //       nextPage = "4"
      //       break;
      //     case "4":
      //       nextPage = "4-1"
      //       break;


      //   }
      resolve(



        { submittedPage: page }
      )
      // }
    }, 4000)
  );
}
