# Claude fooled me

I've been using AI assistants such as [ChatGPT](https://chat.openai.com/) and [Claude](https://claude.ai/) for the past few months. I'm late in the AI trend. As a frontend developer, I didn't see much of its potential helping me out.

But once I've seen enough of ads, I actually started using it. It was all fine until yesterday, the codes Claude generated for me, was buggy. Without error boundary, the website would have been just a white screen for Indonesian users.

It must have been worse, but I guess they just ignored and closed the web immediately. Thanks our Indonesian users for reporting the issue to us.

A little bit on the background. Javascript group all kinds of numbers (whole numbers, rational numbers, irrational numbers) to type `number`. And if your number is too small or too big, converting it to numeric string will return in scientific notation.

For example,

```js
String(1000000) // '1000000'
String(100000000000000000000000) // '1e+23'
String(0.000000000000000000000001) // '1e-24'
```

This was certainly not what I wanted. I wanted them to be just regular numeric strings (without the annoying `e`).

I talked to Claude asking for help. I wished Claude had the sharing feature so that you can read our conversation (ChatGPT indeed did). Let me just every messages out here.

---

Me: How to avoid String() function of Javascript returning a scientific notation?

Claude: To avoid the `String()` function in JavaScript returning scientific notation for large numbers, you can use the `toLocaleString()` method instead. Here's how you can do it:

```js
let largeNumber = 1234567890123456
let formattedString = largeNumber.toLocaleString("fullwide", { useGrouping: false })
console.log(formattedString)
```

This approach has a couple of advantages:

It avoids scientific notation for large numbers.
It works for numbers up to 20 digits long.

If you need to handle even larger numbers or want more control over the formatting, you can use the `Intl.NumberFormat` object:

```js
let largeNumber = 1234567890123456789012345
let formatter = new Intl.NumberFormat("fullwide", {
    useGrouping: false,
    maximumFractionDigits: 0,
})
let formattedString = formatter.format(largeNumber)
console.log(formattedString)
```

This method can handle numbers with more than 20 digits and gives you more options for customization.
Would you like me to explain these methods in more detail or provide additional information about handling large numbers in JavaScript?

---

I did stop here, read its responses and was like: yeah, sounds good. I was actually skeptical about `fullwide`, but a quick search on Google gave me some good feeling about it, so I just went ahead, copied the code and pasted in the project I was working on. I soon requested a prod deployment.

At the moment, I was happy and was full of pride.

Little did I know, `fullwide` did prevent some users from accessing the dashboard. I got reports from my teammate. One of the users must be a tech guy. He took a screenshot saying something cannot be converted to BigInt. I took a look, mocked wallets, but it was fine to me. Nothing happened. No error has been found in my console. I notified my teammate about that, and the tech guy didn't reply anymore, so we skipped this bug as if it was just a momentary issue.

Fast forward a few days, another teammate of mine heard of the problem. He did magic locally and then he showed the result to me. He was able to reproduce! That's very very impressive. What he did was to fake the locale to be `id-ID` (the tech guy's locale).

Then I immediately knew what's wrong. I reproduced the bug with `id-ID` and it was gone after I used `en-US` (our default locale) instead of `fullwide`.

I came back to Claude, asked why, and surprisingly, he said apology.

---

Me: What is `fullwide` ?

Claude: I apologize for the confusion in my previous response. I made a mistake in using `'fullwide'` as a locale. Let me clarify:
`'fullwide'` is not a valid locale string for `toLocaleString()` or `Intl.NumberFormat`. This was an error on my part.
For avoiding scientific notation without using a specific locale, you can use the following approach:

```js
let largeNumber = 1234567890123456
let formattedString = largeNumber.toLocaleString("en-US", { useGrouping: false, maximumFractionDigits: 0 })
console.log(formattedString)
```

In this case:

-   `'en-US'` is used as a locale (you can use any valid locale or omit it)
-   `useGrouping: false` prevents the use of commas or other grouping separators
-   `maximumFractionDigits: 0` ensures no decimal places are shown

For `Intl.NumberFormat`, you can use:

```js
let largeNumber = 1234567890123456789012345
let formatter = new Intl.NumberFormat("en-US", {
    useGrouping: false,
    maximumFractionDigits: 0,
})
let formattedString = formatter.format(largeNumber)
console.log(formattedString)
```

Thank you for bringing this to my attention. It's important to use valid locale strings when working with these methods.

---

`fullwide` is an invalid parameter. I have to use a valid locale, otherwise, the parameter falls back to the current locale. Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales

---

My takeaway with this incident:

> Use your AI assistant with caution
