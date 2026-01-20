# React + TypeScript + Vite

# Reference

[3D Web Developer Portfolio](https://www.youtube.com/watch?v=E-fdPfRxkzQ)
[Sketchfab](https://sketchfab.com/)

[video-kit](https://jsmastery.com/video-kit/c9dc559b-2d8d-453b-9671-edb8d0e63e3a)

# Tips

## Extensions & Snippets

### VS Code

Extensions:
- **ES7+ React/Redux/React-Native snippets**: Essential snippets for React and Redux development.
- **Tailwind CSS IntelliSense**: Provides intelligent suggestions, autocomplete, linting, and hover previews for Tailwind CSS classes, making it easier to write and debug styles.
- **CSS Peek**: Allows you to peek at the CSS definition and jump to the corresponding style directly from HTML class attributes or component files.

### WebStorm

Plugin: Modern React Snippets

### Optimize 3D Models

```
npx gltfjsx optimized-room.glb
```

## Project Dependencies

### 3D & Animation (Three.js Ecosystem)
- **three**
  - **Description**: A lightweight, cross-browser, general-purpose 3D library.
  - **Documentation**: [https://threejs.org/](https://threejs.org/)
- **@react-three/fiber**
  - **Description**: A React renderer for Three.js, allowing you to build 3D scenes declaratively with reusable components.
  - **Documentation**: [https://docs.pmnd.rs/react-three-fiber](https://docs.pmnd.rs/react-three-fiber)
- **@react-three/drei**
  - **Description**: A collection of useful helpers and abstractions for @react-three/fiber (cameras, controls, loaders, etc.).
  - **Documentation**: [https://github.com/pmndrs/drei](https://github.com/pmndrs/drei)
- **@react-three/postprocessing**
  - **Description**: A wrapper for `postprocessing` specifically for React Three Fiber to easily add effects like Bloom, Depth of Field, Glitch, etc.
  - **Documentation**: [https://github.com/pmndrs/react-postprocessing](https://github.com/pmndrs/react-postprocessing)
- **postprocessing**
  - **Description**: The underlying library that implements the post-processing effects.
  - **Documentation**: [https://github.com/pmndrs/postprocessing](https://github.com/pmndrs/postprocessing)
