type Comment = {
  id: string,
  date: string,
  by: string,
  comment: string,
};

type Attributes = {
  like: {
    isLiked: boolean,
    numberOfLikes: number,
  },
  comments: Comment[],
};

export type PostType = {
  id: string,
  title: string,
  content: string,
  author: string,
  released: string,
  readMin: number,
  category: string,
  attributes: Attributes,
};

export type PostCategoryType =
  | "lifestyle"
  | "lifehack"
  | "technology"
  | "documentary"
  | "travel"
  | "culture"
  | "food"
  | "animal"
  | "business"
  | "fashion";

const postCategories: PostCategoryType[] = [
  "lifestyle",
  "lifehack",
  "technology",
  "documentary",
  "travel",
  "culture",
  "food",
  "animal",
  "business",
  "fashion",
];
const posts: PostType[] = [
  {
    id: "1",
    title: "first : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias similique debitis cum saepe culpa perspiciatis aspernatur dolor fugiat, fugit ea? Voluptatum nihil tempore velit eum est ut dignissimos, officiis et. Nemo incidunt veritatis voluptatum nesciunt exercitationem iure quaerat fugiat sint sit quod architecto dolorum, facere ex deleniti in quas fugit nisi obcaecati odit deserunt. Eum hic rem eveniet aperiam voluptas, nulla enim voluptates. Enim, quod blanditiis. Fugit quo, officia enim repellat consequuntur laudantium illum nesciunt hic velit eligendi accusantium eum quas quae a quis odit error recusandae eius ad? Iusto provident, sapiente, maiores odit voluptate esse sunt quaerat illo mollitia aut velit aliquam? Assumenda magnam velit dolor veritatis nostrum explicabo recusandae quidem vel quas cupiditate rem sed ipsum ab hic fugiat eaque, aut totam error consequatur reprehenderit quam! Necessitatibus, possimus nihil officia aperiam placeat quod eum iure natus aspernatur dicta cupiditate ipsam fugit a minus perspiciatis optio ratione non? Rerum totam quasi eligendi laboriosam repudiandae corporis aspernatur dignissimos maiores corrupti iure explicabo necessitatibus provident quod atque aperiam beatae, distinctio odio, mollitia nostrum quae unde dolore. Placeat, itaque laboriosam libero tempore at quod dolor distinctio voluptas suscipit hic. Maxime officia nihil dolorum tempora ipsum quaerat sed deleniti voluptates ab, distinctio a cumque eos fugit aspernatur asperiores nobis libero facilis expedita corrupti eum. Aliquam architecto facere dolore possimus asperiores, porro debitis quaerat dignissimos cumque consectetur placeat inventore quis natus? Libero ullam tenetur ad harum iusto consequuntur quis saepe facilis, reiciendis eveniet blanditiis est provident dolore minima reprehenderit obcaecati magnam similique voluptas ipsam.",
    author: "Anthony",
    released: "30 Nov 2023",
    readMin: 5,
    category: "lifestyle",
    attributes: {
      like: { isLiked: true, numberOfLikes: 3235 },
      comments: [
        {
          id: "ghsdjhhtdfjhcfjhj78trtydjsd",
          date: "",
          by: "james",
          comment: "this is a commet. I love this article, keep it up please!",
        },
        {
          id: "klj6lvgcjrfhtrckvyhluiv658452389t",
          date: "",
          by: "jaylow",
          comment: "this is a commet. I love this article, keep it up please!",
        },
        {
          id: "iluid5tc87545345otcui5rc5tfvukyid",
          date: "",
          by: "ashe",
          comment: "this is a commet. I love this article, keep it up please!",
        },
        {
          id: "ikjgcvkuy75456ertkuy5r5ervokuyed",
          date: "",
          by: "rak",
          comment: "this is a commet. I love this article, keep it up please!",
        },
        {
          id: "ikjgcvkuy75456ertkuy5r5eokuyed",
          date: "10/3/2023",
          by: "username",
          comment: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias similique debitis cum saepe culpa perspiciatis aspernatur dolor fugiat, fugit ea? Voluptatum nihil tempore velit eum est ut dignissimos, officiis et.",
        }
      ],
    },
  },
  {
    id: "2",
    title: "second : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "John",
    released: "30 Nov 2023",
    readMin: 3,
    category: "lifestyle",
    attributes: {
      like: { isLiked: false, numberOfLikes: 244 },
      comments: [
        {
          id: "id",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "3",
    title: "third : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the second blog content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "James",
    released: "28 May 2023",
    readMin: 4,
    category: "food",
    attributes: {
      like: { isLiked: false, numberOfLikes: 129 },
      comments: [
        {
          id: "id",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "4",
    title: "fourth : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the second blog content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "Kenny",
    released: "28 May 2023",
    readMin: 2,
    category: "culture",
    attributes: {
      like: { isLiked: false, numberOfLikes: 981 },
      comments: [
        {
          id: "id",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "5",
    title: "fifth : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the third content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "Ziroll",
    released: "31 Nov 2023",
    readMin: 3,
    category: "culture",
    attributes: {
      like: { isLiked: false, numberOfLikes: 143 },
      comments: [
        {
          id: "id",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "6",
    title: "sixth : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the third content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "Mark",
    released: "31 Nov 2023",
    readMin: 3,
    category: "culture",
    attributes: {
      like: { isLiked: true, numberOfLikes: 937 },
      comments: [
        {
          id: "id",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "7",
    title: "seventh : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the third content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "Bob",
    released: "31 Nov 2023",
    readMin: 3,
    category: "animal",
    attributes: {
      like: { isLiked: false, numberOfLikes: 359 },
      comments: [
        {
          id: "id",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "8",
    title: "eight : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the third content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "Billie",
    released: "31 Nov 2023",
    readMin: 3,
    category: "technology",
    attributes: {
      like: { isLiked: false, numberOfLikes: 455 },
      comments: [
        {
          id: "id",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "9",
    title: "ninth : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the third content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "Mike",
    released: "31 Nov 2023",
    readMin: 3,
    category: "fashion",
    attributes: {
      like: { isLiked: false, numberOfLikes: 24 },
      comments: [
        {
          id: "id",
          date: "",
          by: "mike",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "10",
    title: "tenth : in the society with different cultue, self-observation unfolds the inner mind",
    content: `This is suppose to be the content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias similique debitis cum saepe culpa perspiciatis aspernatur dolor fugiat, fugit ea? Voluptatum nihil tempore velit eum est ut dignissimos, officiis et. Nemo incidunt veritatis voluptatum nesciunt exercitationem iure quaerat fugiat sint sit quod architecto dolorum, facere ex deleniti in quas fugit nisi obcaecati odit deserunt. Eum hic rem eveniet aperiam voluptas, nulla enim voluptates. Enim, quod blanditiis. Fugit quo, officia enim repellat consequuntur laudantium illum nesciunt hic velit eligendi accusantium eum quas quae a quis odit error recusandae eius ad? Iusto provident, sapiente, maiores odit voluptate esse sunt quaerat. Placeat, itaque laboriosam libero tempore at quod dolor distinctio voluptas suscipit hic. Maxime officia nihil dolorum tempora ipsum quaerat sed deleniti voluptates ab, distinctio a cumque eos fugit aspernatur asperiores nobis libero facilis expedita corrupti eum. Aliquam architecto facere dolore possimus asperiores, porro debitis quaerat dignissimos cumque consectetur placeat inventore quis natus? Libero ullam tenetur ad harum iusto consequuntur quis saepe facilis, reiciendis eveniet blanditiis est provident dolore minima reprehenderit obcaecati magnam similique voluptas ipsam.`,
    author: "Anthony",
    released: "30 Nov 2023",
    readMin: 5,
    category: "lifehack",
    attributes: {
      like: { isLiked: false, numberOfLikes: 525 },
      comments: [
        {
          id: "fgfutyoiymndfgunbdh",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        },
        {
          id: "etyiuntutyinouniyt",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        },
        {
          id: "netyunourynyilj",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        },
        {
          id: "emsyamuoikjeetrymulk",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "11",
    title: "eleven : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "John",
    released: "30 Nov 2023",
    readMin: 3,
    category: "lifehack",
    attributes: {
      like: { isLiked: true, numberOfLikes: 532 },
      comments: [
        {
          id: "tuh65h74578n4676",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "12",
    title: "twelve : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the second blog content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "James",
    released: "28 May 2023",
    readMin: 4,
    category: "lifestyle",
    attributes: {
      like: { isLiked: false, numberOfLikes: 857 },
      comments: [
        {
          id: "trbyytunhgumrt6457",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "13",
    title: "thirteen : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the second blog content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "Kenny",
    released: "28 May 2023",
    readMin: 2,
    category: "food",
    attributes: {
      like: { isLiked: false, numberOfLikes: 134 },
      comments: [
        {
          id: "rtgefv565ut36345v",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "14",
    title: "fourteen : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the third content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "Ziroll",
    released: "31 Nov 2023",
    readMin: 3,
    category: "business",
    attributes: {
      like: { isLiked: false, numberOfLikes: 412 },
      comments: [
        {
          id: "fdynr56n5i57i",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "15",
    title: "fifteen : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the third content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "Mark",
    released: "31 Nov 2023",
    readMin: 3,
    category: "fashion",
    attributes: {
      like: { isLiked: true, numberOfLikes: 452 },
      comments: [
        {
          id: "trnesdfnjy4576",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "16",
    title: "sixteen : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the third content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "Bob",
    released: "31 Nov 2023",
    readMin: 3,
    category: "documentary",
    attributes: {
      like: { isLiked: false, numberOfLikes: 123 },
      comments: [
        {
          id: "tryhw54763y",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "17",
    title: "seventeen : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the third content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "Billie",
    released: "31 Nov 2023",
    readMin: 3,
    category: "documentary",
    attributes: {
      like: { isLiked: true, numberOfLikes: 642 },
      comments: [
        {
          id: "funytr765n87f",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  },
  {
    id: "18",
    title: "eigtheen : in the society with different cultue, self-observation unfolds the inner mind",
    content: "This is suppose to be the third content, and i'm trying to make this as long as possible 'cause an article will be much more than this. But i hope you enjoy this one, that will be it thank you for your time.",
    author: "Mike",
    released: "31 Nov 2023",
    readMin: 3,
    category: "travel",
    attributes: {
      like: { isLiked: false, numberOfLikes: 345 },
      comments: [
        {
          id: "egny4557ubhstby",
          date: "",
          by: "",
          comment: "this is a commet. I love this article, keep it up please!",
        }
      ],
    },
  }
];

  
  
const tipsData = [
  {
    id: 1,
    title: "Helpful tips for freelancers",
    image: "/images/18.jpeg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus facilis odit saepe totam. Obcaecati mollitia fuga repudiandae quis optio?",
    tags: "#Travel #Lifestyle",
    readTime: "3 mins read",
  },
  {
    id: 2,
    title: "Helpful tips for freelancers",
    image: "/images/19.jpeg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus facilis odit saepe totam. Obcaecati mollitia fuga repudiandae quis optio?",
    tags: "#Travel #Lifestyle",
    readTime: "3 mins read",
  },
  {
    id: 3,
    title: "Helpful tips for freelancers",
    image: "/images/20.jpeg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus facilis odit saepe totam. Obcaecati mollitia fuga repudiandae quis optio?",
    tags: "#Travel #Lifestyle",
    readTime: "3 mins read",
  },
];

  
const fetch = {
  postCategories,
  posts,
  tipsData,
};

export default fetch;
