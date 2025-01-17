# Css attribute of tailwind used till now
Here's a brief explanation of each of the **Tailwind CSS** utility classes you've mentioned:

### 1. **`flex`**
   - Applies a **flexbox layout** to the element. It makes the element a flex container, enabling child elements to be arranged according to the flexbox properties (like `justify-content`, `align-items`, etc.).

### 2. **`justify-center`**
   - This utility centers the child elements **horizontally** within a flex container. It aligns items to the center of the main axis (default is horizontal).

### 3. **`h-screen`**
   - Sets the element’s **height** to **100vh** (100% of the viewport height). This makes the element take up the entire height of the screen.

### 4. **`bg-blue-600`**
   - Sets the **background color** to a specific shade of blue (`#2563eb`), according to the color palette defined in Tailwind CSS (in this case, a blue from the `blue-600` range).

### 5. **`align-center`**
   - **`align-center`** is not a valid Tailwind class. It seems you intended to use `items-center` to vertically align flex items in the center. 
   - `items-center`: Vertically aligns items to the **center** of the flex container (on the cross-axis).

### 6. **`w-[500px]`**
   - Sets the **width** of the element to **500px**. The `[]` syntax allows custom values that are not part of the default Tailwind width scale.

### 7. **`flex-col`**
   - This changes the flex direction to **column**. It stacks the child elements **vertically** instead of horizontally (default is `row`).

### 8. **`mt-20`**
   - Sets a **top margin** of **5rem** (based on Tailwind’s spacing scale). It creates space above the element.

### 9. **`text-white-500`**
   - This seems incorrect. The correct utility would be **`text-white`** to set the text color to white. There is no `500` variant for `text-white` in Tailwind. `500` is typically used for shades of other colors like `blue-500`.

### 10. **`text-xl`**
   - Sets the font **size** to **1.25rem** (20px), making the text a bit larger than the base text size.

### 11. **`font-bold`**
   - Sets the **font weight** to **bold**, making the text appear bolder.

### 12. **`px-2`**
   - Sets **horizontal padding** (left and right) to **0.5rem** (8px). This adds padding inside the element on the left and right.

### 13. **`py-2`**
   - Sets **vertical padding** (top and bottom) to **0.5rem** (8px). This adds padding inside the element on the top and bottom.

### 14. **`border-gray-300`**
   - Sets the **border color** to a light gray (`#d1d5db`) from the Tailwind color palette.

### 15. **`cursor-text`**
   - Changes the **cursor** to the text cursor (typically a vertical bar), indicating that the user can click or type in the element (typically used for text inputs).

### 16. **`outline-none`**
   - Removes the **outline** on the element (often used to remove the default focus outline that browsers add to elements like buttons and inputs).

### 17. **`rounded-md`**
   - Sets the **border radius** to a **medium size** (0.375rem, or 6px), rounding the corners of the element.

---

### **Summary of Usage**:
These classes allow you to build a **flex-based layout** with a vertically centered, responsive, and styled component. The component:
- Takes up the entire height of the screen (`h-screen`).
- Centers content both horizontally and vertically (`justify-center`, `items-center`).
- Has a fixed width (`w-[500px]`), large padding (`px-2`, `py-2`), and a rounded border (`rounded-md`).
- Text is styled with bold font (`font-bold`) and white color (`text-white`).
- Provides spacing above the component (`mt-20`) and adds a light gray border (`border-gray-300`).
- Has interactive styles, like changing the cursor when clicked (`cursor-text`) and removing the outline (`outline-none`).

By combining these utility classes, you can quickly create well-styled and responsive components in Tailwind CSS.