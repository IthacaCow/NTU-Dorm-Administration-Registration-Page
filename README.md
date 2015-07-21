# NTU Dorm Administration/Registration Page

This is a project that aims to enhance the appearance, usability and functionality of the dorm administration page.

## Why

The origin PHP implementation [dorm.ntu.edu.tw](dorm.ntu.edu.tw) can functions very well.  
From user registration, MRTG display, blacklist rendering to administrative tools, the functionality of this
implementation works the way it ought to be.  Yet, being a administrator, a everyday user of this site myself,
I think there's much to be desired.  I will briefly explain why I think it worths a rewrite. 

### Appearance

In a pragmatic point of view, appearance does not really matters.  But it's always the most obviously place for 
enhancement.  I believe everyone will agree to switch to a more modern, slick interface. 

### User Interface

This is the most important criteria, yet it happens to be the most criticized aspect of the current site.  
Some students complain that the registration page makes it difficult for them to decide which fields to fill out.
Being an adminstrator myself, I find it hard to scroll through the mal-designed IP blacklist.  In addition, the
table simply contains too much unnecessary information.  The naming of the page is unsemantic, making it hard to
understand its functionality.  The network flow rank is full of number.  The correct way is to visualize it in a graph.

### Bad tutorial

There is actually a tutorial on how to fix network problems on [dorm.ntu.edu.tw](dorm.ntu.edu.tw), but few people
know.  Even if they're led to [here](http://dorminfo.cc.ntu.edu.tw/), the tutorial does not contain the necessary
information to fix their problems.  They're unintuitive and outdated.  We shall make it easier to find tutorials 
and populate the tutorial with more scenario, in a way that even my grandma can fix her network problems in our guidance.
We can even provide scripts that automatically detect the user's problems and fix it for them.

### Authorization Account Management

Being a M1 network administrator, I was given an account of `m1.ntu.edu.tw`, with a predefined password 
when I started my job, as if I was passed along a key that had been used for many generations.  
This is a very insecure approach to hand over administratory rights.  The more reasonable way is to delete
the old account and let me register a new admin account.

## How it can be improved

### Frontend / backend sepearation

The current PHP implementation bundles PHP script along with backend service.  This unmodularized approach renders
it hard to modify frontend without breaking backend logic.  In addition, this approach dooms the page to be
static ( it cannot dynamically update content without reloading the page )  The better approach is to seperate 
frontend from backend.  The backend simply serves RESTful APIs so that the frontend can call these APIs in whatever suitable
manner.  In this way, conforming to the same interface, we can modify both backend and frontend without breaking each other.
( we prefer this approach because we don't want to rewrite the whole application when we want to adopt to new technology / new appearance or any server failures )
This is also a more scalable approach because you can seperate frontend and backend to different servers.

### The user should be notified

The user will never know why his network cannot function.  If his network is in fact blocked by [cc.ntu.edu.tw](cc.ntu.edu.tw)
, he should be notified immediately by email or other means ( such as Facebook message, which I'll explain in the next section ) so
that he can take the necessary steps as soon as possible.  This saves both his and network administrators' time.

### Facebook integration

Everyone uses Facebook.  We can integrate Facebook Oauth so that we can notify users through Facebook messages.
This is the fastest way a user could be notified.


### Coherent way to request a repair 

In the case of first-man dorm, users request a repair on a Google Spreadsheet in our Facebook Group.  But some 
people are simply not a member of that group, still more people never know they can make such request on that group.

## Design

### Graphics

I am not a graphic designer.  Yet being a programmer, I'm good at adopting others's work and customizing it into our liking.
I will base on the UI framework [Material Design Lite](http://www.getmdl.io/) recently released by Google and tweak
it to such a manner that you and I will satisfy.

### UI

### Table

The most important UI component in our application would be **table**.  ( block list, user list, network flow rank all 
rely on this component ) I will base on [Angular UI Grid](http://ui-grid.info/) which
will satisfy the following goals:

- Properly paginated.
- Easily collapsable fields to reduce unnecessary information.
- Easily searchable.
- Dynamic loaded ( without refreshing the page )

### Statistics

[dorm.ntu.edu.tw](dorm.ntu.edu.tw) contains a lot of statistics.  But if the user cannot see the 
pattern at first sight, the statistics is basically useless.  [d3.js](d3js.org) provides many 
intuitive, interactive, dynamic visualizations.  
By visualizing, adding interactivity to MRTG and network flow rank, we provide user a chance to know more 
about the lives of other NTU students.
